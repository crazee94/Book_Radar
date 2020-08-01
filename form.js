  
class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('SUBMIT');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.greeting1 = createElement('h2');
      
    }

    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
  
    }
  
    display(){
      this.title.html("Book Radar");
      this.title.position(550, 20);
  
      this.input.position(530 ,80);
      this.button.position(570, 120);
     
  
      this.button.mousePressed(()=>{
        this.greeting.html("Please Make your first entry");
        this.greeting.position(470, 60);
        this.record = createButton('ADD');
        this.record.position(590,120);
        this.input.hide();
        this.button.hide();

        this.record.mousePressed(()=>{
          this.record.hide();
          this.greeting.hide();
          this.book = createInput("BOOK");
          this.book.position(550, 80);
          this.save = createButton('SAVE');
          this.save.position(550, 350);


          this.save.mousePressed(()=>{
            this.book.hide();
            this.save.hide();
            this.greeting1.html("Record Added");
            this.greeting1.position(540,100);
          });

        });
        
      });
  
     
  
    }
  }