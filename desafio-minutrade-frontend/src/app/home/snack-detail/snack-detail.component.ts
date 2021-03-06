import { Component, OnInit, OnDestroy } from '@angular/core'
import { SnackService } from '../../shared/snack.service'
import Snack from '../../snack/snack.model'

@Component({
  selector: 'app-snack-detail',
  templateUrl: './snack-detail.component.html',
  styleUrls: ['./snack-detail.component.css']
})
export class SnackDetailComponent implements OnInit, OnDestroy {
  snack: Snack
  subscription

  constructor(private snackService: SnackService){}

  ngOnInit() {
    // Listen to card changes
    this.subscription = this.snackService.selectedSnackChanged.subscribe((snack: Snack) => {
      this.snack = snack
    })
  }

  // Bind to button event
  buy(){
    this.snackService.buy(this.snack)
  }

  // Clear selection
  unset(){
    this.snack = null
  }

  // Clear subscription
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
