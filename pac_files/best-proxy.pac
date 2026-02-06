function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 205.185.123.62:2555",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 146.235.19.84:10819",
        "SOCKS 194.5.206.118:8080",
        "SOCKS 110.235.248.81:1080",
        "SOCKS 167.172.109.12:39452",
        "SOCKS 146.235.19.84:10907",
        "SOCKS 204.199.202.133:999",
        "SOCKS 95.111.226.235:3128",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 161.35.82.57:1080",
        "SOCKS 104.248.146.99:3128",
        "SOCKS 171.224.190.8:10002",
        "SOCKS 103.28.121.58:80",
        "SOCKS 167.172.253.162:4857",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 146.235.19.84:10801",
        "SOCKS 61.160.66.130:5555",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}