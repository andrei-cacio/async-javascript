const prom = new Promise( ( resolve, reject ) => { 
    setTimeout( ( ) => resolve('bla'), 3000 );
} )

prom
    .then( ( data ) => console.log( "First Then", data) )
    .then( ( data ) => {
        console.log( "Second Then ", data );
        return Promise.reject( "reject" );
    } )
    .then( ( success ) => console.log ("Third Then ", success ) )
    .catch( ( error ) => { console.log( "Catch ", error ); return "ceva"; } );

prom.then( data => console.log("data ", data) )
	.then( data => console.log( "data 2", data ));

prom.then( data => console.log( "data 3", data ))
	.then( data => console.log( "data 4", data ));
