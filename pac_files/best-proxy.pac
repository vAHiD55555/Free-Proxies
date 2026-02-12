function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 123.54.197.53:21824",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 120.77.203.0:443",
        "SOCKS 62.113.119.14:8080",
        "SOCKS 123.54.197.53:21965",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 37.44.238.2:53471",
        "SOCKS 167.172.109.12:46249",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 107.219.228.250:7777",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 203.189.154.200:1080",
        "SOCKS 84.17.35.129:3128",
        "SOCKS 185.236.202.170:3128",
        "SOCKS 123.54.197.19:21308",
        "SOCKS 202.62.55.154:1080",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 123.54.197.20:22937",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 185.106.105.10:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}