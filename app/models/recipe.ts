

export class Recipe{

    constructor(public name:string , public price:number , public description:string , 
        public imgPath:string){

            this.name = name;
            this.price = price;
            this.description = description;
            this.imgPath = imgPath;
    }

}