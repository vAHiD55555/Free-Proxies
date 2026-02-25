function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.141.139.112:5566",
        "SOCKS 185.209.29.226:1080",
        "SOCKS 194.124.211.132:1080",
        "SOCKS 169.57.157.148:80",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 37.110.225.76:1080",
        "SOCKS 176.113.73.99:3128",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 103.195.5.78:30000",
        "SOCKS 213.35.110.67:10919",
        "SOCKS 119.81.71.27:8123",
        "SOCKS 193.56.255.179:3128",
        "SOCKS 42.115.72.184:1111",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 106.45.221.168:3256",
        "SOCKS 221.224.56.210:10021",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 159.65.230.91:20398",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 5.133.219.4:63434",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}