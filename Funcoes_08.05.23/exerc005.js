const dividir = (num1, num2 = 1) => {
    return num1 / num2;
  };

  dividir(10, 2); // retorna 5
dividir(10); // retorna 10, já que o segundo parâmetro é assumido como 1
