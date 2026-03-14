function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.30.28.209:20326",
        "SOCKS 5.255.117.250:1080",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 109.120.135.192:1080",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 123.54.197.53:22611",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 74.48.146.122:5555",
        "SOCKS 206.123.156.228:4558",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 202.62.55.95:1080",
        "SOCKS 123.54.197.49:20854",
        "SOCKS 38.145.203.237:8443",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 221.202.27.194:10809",
        "SOCKS 8.219.229.53:84",
        "SOCKS 125.141.139.198:5566",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}