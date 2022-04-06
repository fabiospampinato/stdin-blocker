
/* IMPORT */

import {describe} from 'fava';
import {setTimeout} from 'node:timers/promises';
import Blocker from '../dist/index.js';

/* MAIN */

describe ( 'Stdin Blocker', it => {

  it ( 'works', async t => {

    t.false ( Blocker.isBlocked () );

    Blocker.block ();

    await setTimeout ( 500 );

    t.true ( Blocker.isBlocked () );

    Blocker.unblock ();

    await setTimeout ( 500 );

    t.false ( Blocker.isBlocked () );

    Blocker.toggle ();

    await setTimeout ( 500 );

    t.true ( Blocker.isBlocked () );

    Blocker.toggle ();

    await setTimeout ( 500 );

    t.false ( Blocker.isBlocked () );

    Blocker.toggle ( true );
    Blocker.toggle ( true );

    await setTimeout ( 500 );

    t.true ( Blocker.isBlocked () );

    Blocker.toggle ( false );
    Blocker.toggle ( false );

    await setTimeout ( 500 );

    t.false ( Blocker.isBlocked () );

  });

});
