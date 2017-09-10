import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-tradingview-overview',
    templateUrl: './tradingview-overview.component.html',
    styleUrls: ['./tradingview-overview.component.scss']
})
export class TradingviewOverviewComponent implements OnInit {
    data: any;
    constructor() {
        this.data =     {
            "showChart": true,
            "locale": "en",
            "width": "400",
            "height": "660",
            "plotLineColorGrowing": "#3CBC98",
            "plotLineColorFalling": "#FF4A68",
            "gridLineColor": "#e9e9ea",
            "scaleFontColor": "#DADDE0",
            "belowLineFillColorGrowing": "rgba(60, 188, 152, 0.05)",
            "belowLineFillColorFalling": "rgba(255, 74, 104, 0.05)",
            "symbolActiveColor": "#F2FAFE",
            "tabs": [
                {
                    "symbols": [
                        {
                            "s": "INDEX:SPX",
                            "d": "S&P 500"
                        },
                        {
                            "s": "INDEX:IUXX",
                            "d": "Nasdaq 100"
                        },
                        {
                            "s": "INDEX:DOWI",
                            "d": "Dow 30"
                        },
                        {
                            "s": "INDEX:NKY",
                            "d": "Nikkei 225"
                        },
                        {
                            "s": "NASDAQ:AAPL",
                            "d": "Apple"
                        },
                        {
                            "s": "NASDAQ:GOOG",
                            "d": "Google"
                        }
                    ],
                    "title": "Equities"
                },
                {
                    "symbols": [
                        {
                            "s": "CME_MINI:ES1!",
                            "d": "E-Mini S&P"
                        },
                        {
                            "s": "CME:E61!",
                            "d": "Euro"
                        },
                        {
                            "s": "COMEX:GC1!",
                            "d": "Gold"
                        },
                        {
                            "s": "NYMEX:CL1!",
                            "d": "Crude Oil"
                        },
                        {
                            "s": "NYMEX:NG1!",
                            "d": "Natural Gas"
                        },
                        {
                            "s": "CBOT:ZC1!",
                            "d": "Corn"
                        }
                    ],
                    "title": "Commodities"
                },
                {
                    "symbols": [
                        {
                            "s": "CME:GE1!",
                            "d": "Eurodollar"
                        },
                        {
                            "s": "CBOT:ZB1!",
                            "d": "T-Bond"
                        },
                        {
                            "s": "CBOT:UD1!",
                            "d": "Ultra T-Bond"
                        },
                        {
                            "s": "EUREX:GG1!",
                            "d": "Euro Bund"
                        },
                        {
                            "s": "EUREX:II1!",
                            "d": "Euro BTP"
                        },
                        {
                            "s": "EUREX:HR1!",
                            "d": "Euro BOBL"
                        }
                    ],
                    "title": "Bonds"
                },
                {
                    "symbols": [
                        {
                            "s": "FX:EURUSD"
                        },
                        {
                            "s": "FX:GBPUSD"
                        },
                        {
                            "s": "FX:USDJPY"
                        },
                        {
                            "s": "FX:USDCHF"
                        },
                        {
                            "s": "FX:AUDUSD"
                        },
                        {
                            "s": "FX:USDCAD"
                        }
                    ],
                    "title": "Forex"
                }
            ]
        };
    }

    ngOnInit() {
    }

}
