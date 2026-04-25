function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.217.90.107:22520",
        "SOCKS 5.255.117.250:1080",
        "SOCKS 58.19.55.7:15167",
        "SOCKS 164.90.187.185:1081",
        "SOCKS 206.123.156.231:8844",
        "SOCKS 206.123.156.231:4714",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 58.19.55.7:15105",
        "SOCKS 185.236.202.170:3128",
        "SOCKS 206.123.156.207:12483",
        "SOCKS 206.123.156.211:5051",
        "SOCKS 206.123.156.207:4819",
        "SOCKS 176.113.73.99:3128",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 58.19.55.7:15300",
        "SOCKS 206.123.156.231:5969",
        "SOCKS 58.19.55.7:15358",
        "SOCKS 58.19.55.4:15343",
        "SOCKS 58.19.55.7:15057",
        "SOCKS 206.123.156.207:8108",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}