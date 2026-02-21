function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 84.17.51.241:3128",
        "SOCKS 35.180.188.216:80",
        "SOCKS 159.65.230.91:20002",
        "SOCKS 121.40.231.103:7890",
        "SOCKS 8.217.147.173:8080",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 66.135.227.178:4145",
        "SOCKS 193.56.255.179:3128",
        "SOCKS 152.53.161.111:58367",
        "SOCKS 47.74.226.8:5001",
        "SOCKS 113.195.224.222:9999",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 89.249.65.191:3128",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 123.54.197.52:22827",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}