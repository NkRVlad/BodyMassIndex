import { Component } from '@angular/core';
import { FormGroup, FormControl , Validators} from '@angular/forms';
@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css'],
  template: `
        <ng-template>

        "assets": [
          {
            "input": "src/assets",
              "glob": "**/*",
              "output": "assets/account"
        },
        {
            "glob": "info.html",
            "input": "src/",
            "output": "./../"
        }
    ],
        </ng-template>
`
})
export class BmiComponent {

  public index_result: string = '0';
  public resultHealthStatus: string;

  public myForm : FormGroup;

  public constructor(){
    this.myForm = new FormGroup({

      "Age": new FormControl("", [
         Validators.max(100), Validators.min(18), Validators.required
      ] ),
      "Height": new FormControl("", [
         Validators.max(270), Validators.min(100), Validators.required
      ] ),
      "Weight": new FormControl("", [
        Validators.max(600), Validators.min(10), Validators.required
      ] ),
    });
  }

  processingBmiRequest(inputAge: number, inputGender: string, inputHeight: number, inputWeight: number): void {

    let person: Person = new Person()
      {
        person.Age = inputAge,
        person.Gender = inputGender,
        person.Height = inputHeight,
        person.Weight = inputWeight,
        person.Index = parseFloat(person.calculationIndexBmi(person.Height, person.Weight).toFixed(0))
      };

      this.index_result = person.Index.toString();
      this.resultHealthStatus = person.resultHealthStatus(person.Index, person.Gender);

    }
  }

export class Person {

  private age: number;
  private gender: string;
  private height: number;
  private weight: number;
  private index: number;

  set Age(age: number) {
    if(age >= 18 && age<=100)
      this.age = age;
  }
  get Age(): number {
    return this.age;
  }

  set Gender(gender: string) {
    if(gender === 'men' || gender === 'women')
      this.gender = gender;
  }
  get Gender(): string {
    return this.gender;
  }

  set Height(height: number) {
    if(height >= 100 && height <= 270)
      this.height = height;
  }
  get Height(): number {
    return this.height;
  }

  set Weight(weight: number) {
    if(weight >= 10 && weight <= 600)
      this.weight = weight;
  }
  get Weight(): number {
    return this.weight;
  }

  set Index(index: number) {
    if(index > 0)
      this.index = index;
  }
  get Index(): number {
    return this.index;
  }

  public calculationIndexBmi(height: number, weight: number): number {
    return weight / Math.pow( (height / 100), 2);
  }

  public resultHealthStatus(index: number, gender: string): string {

      if(gender === 'men'){

        if(index <= 17 && index >= 0) return 'У вас дефецит массы тела';

        else if (index <=25 && index >= 18) return 'У вас нормальная массы тела'

        else if (index <=35 && index >= 16) return 'У вас ожирение первой степени';

        else if (index <= 43 && index >= 36) return 'У вас ожирение второй степени';

        else if (index >= 44) return 'У вас ожирение третьей степени';

      } else {

        if(index <= 15 && index >= 0) return 'У вас дефецит массы тела';

        else if (index <= 23 && index >= 16) return 'У вас нормальная массы тела'

        else if (index <=33 && index >= 24) return 'У вас ожирение первой степени';

        else if (index <= 41 && index >= 34) return 'У вас ожирение второй степени';

        else if (index >= 42) return 'У вас ожирение третьей степени';
    }
  }
}
