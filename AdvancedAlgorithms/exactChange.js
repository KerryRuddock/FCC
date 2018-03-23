/*
** Function: Perform simple Cash Register routines: Price, Payment, Cash OnHand/InDrawer
** @function checkCashRegister
** @summary  Perform simple Cash Register routines: Price, Payment, Cash OnHand/InDrawer
** @param 	 {number} price to 2 decimal places.
** @param 	 {number} cash to 2 decimal places.
** @param 	 {array}  CID 2d Array- denominationType, denominationAmount
** @returns  {array}  Change 2d Array
** @see {@link https://jsperf.com/exactchange-eggscheck

function checkCashRegister(price, cash, cid) {
  
  var coinMath = function( total, value, op ) {
  
    var result;
    
    switch ( op ) {
      case '+':
        result = total + value;
        break;
      case '-':
        result = total - value;
        break;
    }
    return Math.round ( result * 100 ) / 100;
  };
  
  var change = [];
  var owe = coinMath( cash, price, '-');
  var denom = cid.reverse(); // high-to-low
  var arrLen = cid.length;
  var denomBase = [100.00, 20.00, 10.00, 5.00, 1.00, 0.25, 0.10, 0.05, 0.01];
  
  var registerTotal = denom.reduce( function( acc, arr ) {
    return acc + arr[1];
  }, 0);
 
  var denomBaseAmt = 0, denomUnit = 0;
  for (var j = 0; j < arrLen; j++) {
 
    if ( registerTotal < owe) {
      change = "Insufficient Funds";
      break;
    }
    
    if ( registerTotal === owe ) {
      change = "Closed";
      break;
    }
    
    denomUnit = denomBase[j];
    
    if ( denomUnit > owe ) {
      continue;
    } 
    else {
      
      denomBaseAmt = cid[j][1]; 

      while ( denomBaseAmt > 0 && owe >= denomUnit ) {
        owe = coinMath( owe, denomUnit, '-' );
        denomBaseAmt = coinMath ( denomBaseAmt, denomUnit, '-' );
        
        // search change for denomUnit accumulator
        var idx = -1, chgLen = change.length;
        for ( var n = 0; n < chgLen; n++ ) {
          if ( change[n][0] === denom[j][0] ) {
            idx = n;
            break;
          }
        }
        
        if ( idx === -1 ) {
            change.push( [ denom[j][0], denomUnit ] );
        }
        else {
           change[idx][1] = coinMath( change[idx][1], denomUnit, '+' );
        }
        cid[j][1] = coinMath( cid[j][1], denomUnit, '-' );
        registerTotal = coinMath( registerTotal, denomUnit, '-' );

      } // end while
      
      if ( owe === 0 ){ 
        break;
      }
    }
    
  } // end for
  if ( registerTotal === owe ){ 
    change = "Closed";
  } else if ( owe > 0) {
    change = "Insufficient Funds"
  }
  
  return change;
}

