function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 110.235.255.252:1080",
        "SOCKS 81.12.119.171:8080",
        "SOCKS 65.108.203.36:18080",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 193.233.254.77:1080",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 163.5.128.210:14270",
        "SOCKS 121.128.121.224:3128",
        "SOCKS 223.113.89.138:1080",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 193.239.86.247:3128",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 119.81.71.27:80",
        "SOCKS 5.255.99.75:1080",
        "SOCKS 110.235.248.81:1080",
        "SOCKS 61.72.221.94:3128",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 51.158.172.165:8811",
        "SOCKS 144.91.118.176:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}