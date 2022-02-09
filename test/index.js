
/* IMPORT */

const {describe} = require ( 'fava' );
const delay = require ( 'promise-resolve-timeout' );
const {default: Blocker} = require ( '../dist' );

/* MAIN */

describe ( 'Stdin Blocker', it => {

  it ( 'works', async t => {

    t.false ( Blocker.isBlocked () );

    Blocker.block ();

    await delay ( 500 );

    t.true ( Blocker.isBlocked () );

    Blocker.unblock ();

    await delay ( 500 );

    t.false ( Blocker.isBlocked () );

    Blocker.toggle ();

    await delay ( 500 );

    t.true ( Blocker.isBlocked () );

    Blocker.toggle ();

    await delay ( 500 );

    t.false ( Blocker.isBlocked () );

    Blocker.toggle ( true );
    Blocker.toggle ( true );

    await delay ( 500 );

    t.true ( Blocker.isBlocked () );

    Blocker.toggle ( false );
    Blocker.toggle ( false );

    await delay ( 500 );

    t.false ( Blocker.isBlocked () );

  });

});
