function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 176.74.197.163:36918",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 91.238.104.172:2024",
        "SOCKS 110.235.248.81:1080",
        "SOCKS 141.0.11.243:80",
        "SOCKS 121.128.121.54:3128",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 177.10.66.14:1080",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 45.87.41.237:1080",
        "SOCKS 204.199.140.28:999",
        "SOCKS 58.19.55.17:15246",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 103.118.85.144:1080",
        "SOCKS 193.239.86.249:3128",
        "SOCKS 149.88.71.87:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}