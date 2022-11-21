function palindrome(str) {
    const strClean= str
      .toLowerCase()
      //Eliminar numeros y simbolos
      .match(/[a-z0-9]/g);
  //Comparo al string limpio, con el mismo pero al revez.
    return (strClean.join('') === strClean.reverse().join(''))?true:false
}
//Test, entre otros
palindrome("_eye");

