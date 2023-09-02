const canVote = (birthdate) => {
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();
  
    birthdate.setFullYear(today.getFullYear());
  
    if (today < birthdate) {
      age--;
    }
  
    if (age >= 16) {
      return `Com ${age} anos de idade, você pode votar.`;
    } else {
      return `Com ${age} anos de idade, você ainda não pode votar.`;
    }
  };
  
  const birthdate = new Date(2010, 0, 1); // 1 de janeiro de 2000
  console.log(canVote(birthdate));