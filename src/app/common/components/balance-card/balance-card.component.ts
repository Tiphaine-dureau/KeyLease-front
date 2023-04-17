import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-balance-card',
  templateUrl: './balance-card.component.html',
  styleUrls: ['./balance-card.component.scss']
})
export class BalanceCardComponent implements OnInit {
  @Input() expectedRentAmount!: number;
  @Input() balance!: number;
  @Input() footer: boolean = true;
  @Input() hFull: boolean = true;
  public model!: {
    expectedLabel: string,
    balanceLabel: string,
    expectedValue: any,
    balanceValue: any,
    headerClass: 'red-card' | 'green-card'
  };

  public ngOnInit(): void {
    this.model = {
      expectedLabel: 'Montant attendu',
      balanceLabel: 'Solde actuel',
      expectedValue: `${this.expectedRentAmount} €`,
      balanceValue: `${this.balance} €`,
      headerClass: this.expectedRentAmount != null && this.balance < this.expectedRentAmount ? "red-card" : "green-card"
    }
  }
}
