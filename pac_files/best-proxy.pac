function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 139.180.140.254:1080",
        "SOCKS 143.110.217.153:1080",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 193.56.255.179:3128",
        "SOCKS 93.184.8.22:1080",
        "SOCKS 161.35.82.57:1080",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 16.78.219.183:1964",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 193.239.86.249:3128",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 78.157.57.71:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}