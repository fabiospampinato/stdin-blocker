
/* IMPORT */

import readline from 'node:readline';

/* MAIN */

class Blocker {

  /* VARIABLES */

  private stream: NodeJS.ReadStream;
  private interface?: readline.Interface;
  private blocked: boolean;

  /* CONSTRUCTOR */

  constructor ( stream: NodeJS.ReadStream = process.stdin ) {

    this.stream = stream;
    this.blocked = false;

  }

  /* API */

  onKeypress = ( _: string, key: { ctrl?: boolean, name?: string } ): void => {

    if ( key.ctrl && key.name === 'c' ) {

      return process.exit ( 0 );

    }

  };

  isBlocked = (): boolean => {

    return this.blocked;

  };

  block = (): void => {

    return this.toggle ( true );

  };

  unblock = (): void => {

    return this.toggle ( false );

  };

  toggle = ( force: boolean = !this.blocked ): void => {

    this.blocked = force;

    if ( force ) {

      if ( this.stream.isTTY ) {

        this.stream.setRawMode ( true );

      }

      this.interface = readline.createInterface ({ input: this.stream, escapeCodeTimeout: 50 });

      readline.emitKeypressEvents ( this.stream, this.interface );

      this.stream.on ( 'keypress', this.onKeypress );

    } else {

      if ( this.stream.isTTY ) {

        this.stream.setRawMode ( false );

      }

      if ( this.interface ) {

        this.interface.close ();

      }

      this.stream.off ( 'keypress', this.onKeypress );

    }

  };

}

/* EXPORT */

export default Blocker;
