function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.242.175.241:8899",
        "SOCKS 185.93.89.181:20000",
        "SOCKS 185.93.89.144:9386",
        "SOCKS 120.77.203.0:443",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 67.43.228.253:3881",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 103.188.169.95:8080",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 198.187.28.126:8080",
        "SOCKS 117.74.65.207:443",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 40.172.232.213:8989",
        "SOCKS 185.93.89.144:10071",
        "SOCKS 47.88.104.126:3344",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}