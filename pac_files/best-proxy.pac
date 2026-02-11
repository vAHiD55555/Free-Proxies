function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.123.143.251:3128",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 167.172.109.12:41491",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 85.214.244.174:3128",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 159.8.114.37:80",
        "SOCKS 95.80.103.217:1080",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 87.107.164.251:8080",
        "SOCKS 103.188.169.93:8080",
        "SOCKS 159.89.113.155:8080",
        "SOCKS 67.43.228.251:17383",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 45.144.232.249:52994",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 104.248.59.38:80",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 101.91.242.198:6688",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}