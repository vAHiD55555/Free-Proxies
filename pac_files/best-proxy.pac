function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 37.16.74.14:11459",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 185.176.94.75:1080",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 119.81.189.194:80",
        "SOCKS 34.85.74.166:1080",
        "SOCKS 152.53.171.242:21105",
        "SOCKS 113.100.209.184:3128",
        "SOCKS 123.54.197.17:20055",
        "SOCKS 139.159.99.242:8080",
        "SOCKS 220.128.223.136:8088",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 89.249.65.191:3128",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 152.53.171.242:19333",
        "SOCKS 213.35.110.67:10811",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}