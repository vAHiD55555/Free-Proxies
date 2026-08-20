function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 43.135.179.129:7890",
        "SOCKS 95.81.95.41:9050",
        "SOCKS 186.26.95.249:61445",
        "SOCKS 5.255.123.162:1080",
        "SOCKS 83.147.18.168:1080",
        "SOCKS 150.242.218.137:1080",
        "SOCKS 118.145.141.251:44027",
        "SOCKS 37.187.140.119:3080",
        "SOCKS 82.9.133.51:9150",
        "SOCKS 160.250.54.6:9000",
        "SOCKS 90.150.187.82:1080",
        "SOCKS 118.145.141.251:44049",
        "SOCKS 118.145.141.251:44231",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 118.145.141.251:44121",
        "SOCKS 103.36.11.18:8199",
        "SOCKS 152.32.217.35:10808",
        "SOCKS 5.144.133.195:9050",
        "SOCKS 193.30.123.61:9050",
        "SOCKS 120.133.82.62:44150",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}