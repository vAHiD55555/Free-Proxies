function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 195.93.173.58:9050",
        "SOCKS 78.140.46.48:1080",
        "SOCKS 157.180.121.252:20017",
        "SOCKS 35.183.64.191:29715",
        "SOCKS 23.95.189.138:8080",
        "SOCKS 200.26.187.76:999",
        "SOCKS 147.75.33.99:10611",
        "SOCKS 8.210.89.96:1080",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 185.149.240.155:1080",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 167.99.171.156:443",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 93.113.63.73:33100",
        "SOCKS 180.211.187.187:8008",
        "SOCKS 72.10.160.173:1157",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}