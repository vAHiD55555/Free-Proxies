function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.160.90:1237",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 185.93.89.187:8187",
        "SOCKS 185.93.89.147:23793",
        "SOCKS 185.93.89.187:39099",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 185.93.89.158:10104",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 89.58.45.94:49044",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 91.151.88.220:6618",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}