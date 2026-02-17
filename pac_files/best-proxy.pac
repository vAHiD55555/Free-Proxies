function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 178.33.162.89:58574",
        "SOCKS 222.184.48.235:22222",
        "SOCKS 72.10.160.90:32931",
        "SOCKS 78.187.42.187:3310",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 15.207.196.77:3128",
        "SOCKS 5.255.117.250:1080",
        "SOCKS 185.123.143.247:3128",
        "SOCKS 180.183.97.16:8080",
        "SOCKS 167.172.109.12:39533",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 104.248.59.38:80",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 185.38.111.1:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}