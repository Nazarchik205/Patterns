class SimpleMembership {
  constructor(name) {
    this.name = name;
    this.cost = 50;
  }
}

class StandardMembership {
  constructor(name) {
    this.name = name;
    this.cost = 150;
  }
}

class PremiumMembership {
  constructor(name) {
    this.name = name;
    this.cost = 500;
  }
}
//    ||
//   \./   объединяем в фабрику

class MemberFactory {
  static list = {
    simple: SimpleMembership,
    standard: StandardMembership,
    premium: PremiumMembership,
  };

  create(name, type = "simple") {
    let member = new MemberFactory.list[`${type}`](name);
    //? В этом и преимущество фабрик, они позволяют выставлять свои методы и стандарты
    member.type = type;
    console.log(`${name} (type: ${type}) was created!`);
    return member;
  }
}

let factory1 = new MemberFactory("simpleFactory");
let sub1 = factory1.create("Aboba", "standard");
console.log(sub1.cost);
console.log(sub1.name);
