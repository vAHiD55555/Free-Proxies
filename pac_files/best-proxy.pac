function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 174.75.211.222:4145",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 35.182.97.107:80",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 36.255.98.177:4245",
        "SOCKS 43.133.11.136:6006",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 198.177.254.157:4145",
        "SOCKS 43.133.12.178:6006",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 43.153.181.12:6006",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 161.35.82.57:1080",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 62.133.62.12:1081",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}