function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 120.77.203.0:443",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 123.54.197.20:21085",
        "SOCKS 3.24.178.81:80",
        "SOCKS 54.88.116.133:80",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 103.28.121.58:80",
        "SOCKS 85.214.244.174:3128",
        "SOCKS 123.54.197.16:20708",
        "SOCKS 119.81.189.194:8123",
        "SOCKS 176.113.73.99:3128",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 193.56.255.181:3128",
        "SOCKS 123.54.197.19:20912",
        "SOCKS 51.158.68.133:8811",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 159.8.114.37:8123",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}