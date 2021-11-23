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


const singleA = singelton.getInstance()
const singleB = singelton.getInstance()

