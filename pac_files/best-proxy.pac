function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.54.57.117:50460",
        "SOCKS 152.53.36.101:32199",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 152.53.171.242:50287",
        "SOCKS 103.216.253.50:20000",
        "SOCKS 38.183.183.114:999",
        "SOCKS 47.114.165.250:8222",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 152.53.171.242:48049",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 152.53.171.242:57769",
        "SOCKS 8.217.34.2:1011",
        "SOCKS 116.203.139.209:5678",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 198.177.125.181:3949",
        "SOCKS 95.216.214.204:8888",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 37.221.193.221:11714",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}