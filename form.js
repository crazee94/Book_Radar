  
class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('SUBMIT');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.greeting1 = createElement('h2');
      this.greeting2 = createElement('h2');
      this.bname = createElement('h4');
      this.sname = createElement('h4');
      this.pname = createElement('h4');
      this.aname = createElement('h4');
      this.bname1 = createElement('h4');
      this.sname1 = createElement('h4');
      this.pname1 = createElement('h4');
      this.aname1 = createElement('h4');

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
          this.bname.html("Book Name");
          this.bname.position(450,60);
          this.book = createInput("Book's Name");
          this.book.position(550, 80);

          this.aname.html("Author's Name");
          this.aname.position(430,100);
          this.author= createInput("Author's name");
          this.author.position(550, 120);

          this.pname.html("Total Pages");
          this.pname.position(450,140);
          this.page = createInput("Total Pages");
          this.page.position(550, 160);
          
          this.sname.html("Shelf No.");
          this.sname.position(470,180);
          this.shelf = createInput("Shelf no.");
          this.shelf.position(550, 200);

          this.save = createButton('SAVE');
          this.save.position(550, 350);


          this.save.mousePressed(()=>{
            this.book.hide();
            this.author.hide();
            this.page.hide();
            this.shelf.hide();
            this.bname.hide();
            this.pname.hide();
            this.sname.hide();
            this.aname.hide();

            this.save.hide();
            this.greeting1.html("Record Added");
            this.greeting1.position(540,100);
            this.add = createButton('+');
            
            this.add.position(600,100);


            this.add.mousePressed(()=>{
              
              this.bname1.html("Book Name");
              this.bname1.position(450,60);
              this.book = createInput("Book's Name");
              this.book.position(550, 80);

              this.aname1.html("Author's Name");
              this.aname1.position(430,100);
              this.author= createInput("Author's name");
              this.author.position(550, 120);

              this.pname1.html("Total Pages");
              this.pname1.position(450,140);
              this.page = createInput("Total Pages");
              this.page.position(550, 160);
          
              this.sname1.html("Shelf No.");
              this.sname1.position(470,180);
              this.shelf = createInput("Shelf no.");
              this.shelf.position(550, 200);
            
              this.add.hide();
              this.greeting1.hide();

              this.save1 = createButton('SAVE');
              this.save1.position(550, 350);

              this.save1.mousePressed(()=>{
              this.greeting2.html("Record Saved");
              this.greeting2.position(540,100);
              
              this.book.hide();
              this.author.hide();
              this.page.hide();
              this.shelf.hide();
              this.bname1.hide();
              this.pname1.hide();
              this.sname1.hide();
              this.aname1.hide();
              this.save1.hide();

              });

            });

          });

        });
        
      });
  
     
  
    }
  }