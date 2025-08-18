function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 195.158.8.123:3128",
        "SOCKS 116.203.139.209:5678",
        "SOCKS 173.209.63.70:8040",
        "SOCKS 117.161.170.163:9021",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 221.202.27.194:10809",
        "SOCKS 42.96.16.176:1312",
        "SOCKS 103.82.36.237:8888",
        "SOCKS 20.210.76.104:8561",
        "SOCKS 20.41.240.154:3128",
        "SOCKS 49.156.44.115:8080",
        "SOCKS 54.37.72.89:80",
        "SOCKS 138.199.25.13:3904",
        "SOCKS 152.53.194.55:21609",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 114.80.36.254:3081",
        "SOCKS 176.126.103.194:44214",
        "SOCKS 168.220.89.95:3128",
        "SOCKS 173.209.63.66:8232",
        "SOCKS 42.117.240.3:16000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}