function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 159.8.114.37:8123",
        "SOCKS 198.58.115.177:32768",
        "SOCKS 13.229.47.109:80",
        "SOCKS 51.158.172.165:8811",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 8.213.197.208:9080",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 13.36.243.194:9899",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 8.215.12.103:8001",
        "SOCKS 123.54.197.24:20067",
        "SOCKS 123.54.197.53:23400",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 123.54.197.51:23548",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 51.158.68.133:8811",
        "SOCKS 123.54.197.53:22345",
        "SOCKS 47.251.87.74:92",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}