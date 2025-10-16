function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.129.36.115:57114",
        "SOCKS 213.184.242.144:1337",
        "SOCKS 43.208.25.125:19201",
        "SOCKS 222.59.173.105:44233",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 179.27.158.78:80",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 152.53.36.101:10809",
        "SOCKS 138.68.21.132:40467",
        "SOCKS 47.250.51.110:8081",
        "SOCKS 67.43.236.21:8561",
        "SOCKS 185.93.89.143:6427",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 179.96.28.58:80",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 72.10.160.171:23173",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 185.93.89.163:4278",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 185.93.89.146:9007",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}