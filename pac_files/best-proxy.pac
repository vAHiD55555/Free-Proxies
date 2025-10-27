function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 120.77.203.0:443",
        "SOCKS 38.54.1.17:8888",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 152.53.36.101:45843",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 67.43.228.254:11053",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 202.136.88.210:11011",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 47.109.39.34:3389",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 47.97.86.231:8222",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 38.253.88.242:999",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 221.202.27.194:10806",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}