function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.141.139.110:5566",
        "SOCKS 159.89.113.155:8080",
        "SOCKS 13.70.6.6:50161",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 167.172.109.12:37355",
        "SOCKS 64.227.131.240:1080",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 103.195.6.37:30048",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 185.123.143.251:3128",
        "SOCKS 20.27.11.248:8561",
        "SOCKS 223.113.89.138:1080",
        "SOCKS 213.21.233.242:1080",
        "SOCKS 193.56.255.179:3128",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 178.49.22.23:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}