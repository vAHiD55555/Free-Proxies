function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 223.25.109.163:8199",
        "SOCKS 115.72.15.25:10029",
        "SOCKS 8.217.111.249:1011",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 13.59.113.45:31280",
        "SOCKS 103.17.182.130:8585",
        "SOCKS 116.203.139.209:5678",
        "SOCKS 152.53.36.101:26563",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 212.227.244.51:7777",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 67.43.236.18:17781",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 182.253.32.112:80",
        "SOCKS 65.108.203.35:28080",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 144.91.95.238:58237",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}