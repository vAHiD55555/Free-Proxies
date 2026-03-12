function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.145.34.10:55443",
        "SOCKS 221.202.27.194:10809",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 149.62.186.244:1080",
        "SOCKS 43.208.16.199:30756",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 85.198.98.179:1080",
        "SOCKS 206.123.156.187:7788",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 107.173.0.178:1080",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 123.54.197.20:22210",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}