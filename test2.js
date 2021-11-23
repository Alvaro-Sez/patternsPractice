singelton = (function(){
  let instance

  const setInstance = function(){
    const privateRandomNumber = Math.random()
    return {
      getRandomNumber: function(){
        return privateRandomNumber
      }
    }
  }

  return {
    getInstance: function(){
      if(!instance) instance = setInstance()
      return instance
    }
  }
})()

/*  the objects returned from singelton takes the persistent lexical scope reference */
/*  and those parameters are accesible from singleA and singleB */
const singleA = singelton.getInstance()
const singleB = singelton.getInstance()

console.log(singleA.getRandomNumber()=== singleB.getRandomNumber())
/* true */