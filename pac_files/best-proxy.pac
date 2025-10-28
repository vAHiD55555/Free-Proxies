function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.245.83.61:1011",
        "SOCKS 146.70.164.210:1080",
        "SOCKS 51.210.4.123:60414",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 47.239.104.34:1011",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 116.203.139.209:5678",
        "SOCKS 46.161.198.241:3128",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 103.184.50.102:9090",
        "SOCKS 157.66.2.153:1111",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 94.102.199.60:8080",
        "SOCKS 113.160.188.21:1080",
        "SOCKS 190.94.212.228:999",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 43.208.25.125:8004",
        "SOCKS 149.202.75.85:36666",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}