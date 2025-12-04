function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 171.238.90.238:1068",
        "SOCKS 188.166.252.135:8080",
        "SOCKS 120.77.203.0:443",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 167.172.109.12:39452",
        "SOCKS 152.70.98.46:8888",
        "SOCKS 35.180.127.14:1001",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 67.43.236.18:17781",
        "SOCKS 202.40.186.66:43773",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 34.216.224.9:40715",
        "SOCKS 119.81.71.27:8123",
        "SOCKS 35.152.164.181:3128",
        "SOCKS 122.165.97.254:3128",
        "SOCKS 94.100.18.111:3128",
        "SOCKS 169.57.157.146:8123",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}