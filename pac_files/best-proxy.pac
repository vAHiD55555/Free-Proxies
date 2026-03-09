function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 112.86.116.24:1080",
        "SOCKS 222.184.48.252:22222",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 39.104.201.40:7890",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 110.235.247.248:1080",
        "SOCKS 71.168.71.12:8888",
        "SOCKS 123.57.0.163:8888",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 8.210.17.35:8081",
        "SOCKS 217.76.245.80:999",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 45.136.131.47:8443",
        "SOCKS 5.101.0.233:3128",
        "SOCKS 136.239.209.125:8080",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 125.141.139.110:5566",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}