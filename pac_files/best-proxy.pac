function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.236.19:29535",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 77.105.142.165:1080",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 8.220.194.115:1080",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 72.10.160.172:5959",
        "SOCKS 100.27.183.62:8080",
        "SOCKS 47.245.117.43:80",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 5.181.167.30:60001",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 41.65.160.172:1976",
        "SOCKS 128.140.76.145:16894",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 47.88.104.126:3344",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}