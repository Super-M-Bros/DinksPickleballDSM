import { Component } from '@angular/core';


@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  shown: number[] = [];
  faqs = [
    {question:'Is this Heaven?', answers:["No, it's indoor pickleball on 13 proper dedicated courts in Iowa!"]},
    {question:'When can I start playing?', answers:["We are working extremely hard to get open ASAP so our members have a place to play when the Iowa weather turns south. As you can imagine, there is A LOT that goes into transforming a 72,000 sq ft facility (and unfortunately a few things we couldn't imagine). We are striving for a late October court launch, but of course there are things outside of our control. We plan to keep our current and prospective members up to date with both our progress and our opening date as we get closer!"]},
    {question:'Do I need to be a member to play at Dinks?', answers:["Yes, we are a member facility. Members can sign up for open play or book courts in advance and will receive a unique door code to enter our facility for each playing session. This is both for safety and liability.", "All players have different needs and playing habits, so we offer 3 different membership options to accommodate varying player's budgets and playing frequency/needs.", "Members may bring a guest(s) with them to their reservation, but guests must pay a daily guest fee of $10."]},
    {question:'Will there be Open Play?', answers:["Yes! We will be adapting to member demand, but initially plan to have open play 7 days a week from 6am-10am on dedicated courts. There will also be courts available for reservations during these time slots as well.", ["Limited - $9/time","Gold - $8/time","VIP - $7/time"]]},
    {question:'Can I sign up to be a member now before Dinks Opens?', answers:["Yes! Membership sign up is now live! Follow our instructions on our home page by either going to the court reserve website or downloading the court reserve app and selecting Dinks Pickleball.", "By joining now, before we open our doors, not only do you help support our mission of providing the DSM pickleball community indoor dedicated courts but you also get:", ["The remainder of 2023 included as part of your annual membership - renewal date will be 1/1/2025", "VIP members get added perk of a free 2 hour rental (up to $56 value)", "Waived activation fee"]]},
    {question:'What else will be available outside of court rentals?', answers:["While we are truly a dedicated pickleball facility, there will be a lot going on at Dinks! Outside of reserving courts to battle it out with your friends or signing up for open play to make new friends, Dinks will offer a variety of Pickleball instruction from Intro to Pickleball, beginner, intermediate and advanced clinics and lessons. We also plan to offer leagues and fun events!", "With 13 courts we will also be able to provide ongoing Tournaments year round and already have several planned and in the works!", "Outside of pickleball we want our members to stay, relax, socialize and have fun. We have a lot of space for our members to enjoy, bags, ping pong, yard games are more!"]},
    {question:'Are there Sponsorship opportunities to both support Dinks and Promote my Business?', answers:["Yes! This is a community and it has been our experience that pickleball players make fast friends and support one another. We have a variety of sponsorship opportunities that help us deliver on our mission to the pickleball community while at the same time providing you an opportunity to connect your business with the broader community.", "Please reach out and lets discuss in further detail!"]},
  ]

  isString(val: any): boolean { return typeof val === 'string'; }

  toggleShown(faqIndex: number){
    const index = this.shown.findIndex((val) => val === faqIndex);
    if(index > -1) this.shown.splice(index);
    else this.shown.push(faqIndex)
  }
}
