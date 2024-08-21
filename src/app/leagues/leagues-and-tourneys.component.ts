import { Component } from '@angular/core'

@Component({
    selector: 'app-leagues-and-tourneys',
    standalone: true,
    imports: [],
    templateUrl: './leagues-and-tourneys.component.html',
    styleUrl: './leagues-and-tourneys.component.scss',
})
export class LeaguesAndTourneysComponent {
    leagues: League[] = [
        {
            name: 'Sprint League',
            dates: 'April 15th - May 20th',
            price: { amount: '125', per: 'team' },
            details: [
                'Best 2 of 3',
                '1st and 2nd game to 11 points, 3rd game to 7 points',
                '2 matches/week with 40 minute time limit',
            ],
            winnings: 'Dinks gift certificates awarded to top 3 teams',
            registrationLink:
                'https://teamsideline.com/sites/DINKSpickleball/current-programs',
        },
    ]
    tournaments: Tournament[] = [
        {
            name: 'Inaugural Crazy 8 Tournament Hosted by Kiwanis WDM',
            dates: '2/10',
            description:
                'Sign up as an individual and get paired into a group of 8 in your skill level for a guaranteed 7 games!',
            price: { amount: '30', per: 'person' },
            registrationLink:
                'https://www.eventbrite.com/e/wdm-kiwanis-crazy-8-pickleball-tournament-tickets-779506654387?aff=oddtdtcreator&fbclid=IwAR3QgZCcXvFStzWPf1uutrzk-Y567oW3Aicap_ni7jGFkDNNC50qDL8ZF-E',
        },
        {
            name: 'Pickle Palooza: All Iowa Club Event',
            dates: '2/24',
            description:
                'Show your club spirit, grab a team of 4 and compete MLP style! Competition not your thing?  Thats ok, meet other pickleballers from across the state, join in on open play, fun events and competitions throughout the day while cheering on your club!',
            price: { amount: '30', per: 'person' },
            registrationLink:
                'https://docs.google.com/forms/d/e/1FAIpQLSfFTw6Vf-i21PE0HSOsM8xRSaXYh9voctBGS4kG1cYvxey7Sg/viewform?usp=sf_link',
        },
        {
            name: 'DMMPC Tournament Benefiting ALSO',
            dates: '4/6-4/7',
            description:
                'Join DMMPC for this 2 day tournament to raise funds to help battle ALS',
            price: { amount: '50-60', per: 'person' },
            registrationLink:
                'https://www.globalpickleball.network/network/pickleball-tournament/tournamentEvent/4330_1723-dsm-metro-pickleball-tournament-als-institute',
        },
        {
            name: 'Rotary Pickleball for a Cause Crazy 8 & Tournament',
            dates: '4/12-4/13',
            description: 'Crazy 8 Friday Evening and Full Tournament Saturday',
            registrationLink: 'https://pickleballbrackets.com/pts.aspx',
        },
        {
            name: 'Iowa Senior Games',
            dates: '6/5-6/6',
            description: '',
            registrationLink:
                'https://www.iowaseniorgames.org/event/summer-iowa-senior-games/pickleball/',
        },
        {
            name: 'PPA United Pickleball Championships by Pickleball Inc.',
            dates: '6/21-6/23',
            description:
                'These Tournaments are being held across all 50 states to determine the best Amateur players in each state.  Winning this tournament will give you free berth into the United Pickleball Championships in Dallas!',

            registrationLink:
                'https://pickleballbrackets.com/pts.aspx://pickleballbrackets.com/pts.aspx',
        },
        {
            name: 'CT MONEY Pickleball Tournament',
            dates: '7/26-7/28',
            description:
                'CT Tournaments are fantastically run throughout the midwest and they are bringing the experience to Dinks with >$2K cash purse.',

            registrationLink:
                'https://pickleballbrackets.com/pts.aspx://pickleballbrackets.com/pts.aspx',
        },
        {
            name: 'World Pickleball Tour Des Moines Challenger Powered by Pickleplay',
            dates: '9/13-9/15',
            description:
                'Gold Medalists will be invited to the 2025 WPT Amateur Inviatational which will pit the best players in the country against eachother for their share of the $175K Cash Purse!',

            registrationLink:
                'https://pickleballbrackets.com/ptd.aspx?eid=2306b652-5c6a-4795-916b-3e15b8da7189',
        },
        {
            name: 'Des Moines Pickleball Team Classic Charity Event 2024',
            dates: '10/25-10/26',
            description:
                'Back again!  Team style event with a fun event Friday night and Main play all day Saturday!  Players will be selected to teams of 4 to compete against teams of similar skill.  Sign up as an individual to be placed on a team. Proceeds will go to UnityPoint John Stoddard Cancer Center in Des Moines.',
            registrationLink: '',
        },
    ]
}

interface League {
    name: string
    dates?: string
    price?: { amount: string; per?: string }
    details?: string[]
    winnings?: string
    registrationLink?: string
}
interface Tournament {
    name: string
    dates?: string
    description?: string
    price?: { amount: string; per?: string }
    registrationLink?: string
}
