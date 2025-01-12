
/* IMPORT */

import {describe} from 'fava';
import Blocker from '../dist/index.js';

/* MAIN */

describe ( 'Stdin Blocker', it => {

  it ( 'works', async t => {

    t.false ( Blocker.isBlocked () );

    Blocker.block ();

    await t.wait ( 500 );

    t.true ( Blocker.isBlocked () );

    Blocker.unblock ();

    await t.wait ( 500 );

    t.false ( Blocker.isBlocked () );

    Blocker.toggle ();

    await t.wait ( 500 );

    t.true ( Blocker.isBlocked () );

    Blocker.toggle ();

    await t.wait ( 500 );

    t.false ( Blocker.isBlocked () );

    Blocker.toggle ( true );
    Blocker.toggle ( true );

    await t.wait ( 500 );

    t.true ( Blocker.isBlocked () );

    Blocker.toggle ( false );
    Blocker.toggle ( false );

    await t.wait ( 500 );

    t.false ( Blocker.isBlocked () );

  });

});
