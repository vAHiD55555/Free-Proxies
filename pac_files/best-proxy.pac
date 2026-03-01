function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 38.76.200.182:58367",
        "SOCKS 183.249.5.111:22222",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 170.168.64.136:1080",
        "SOCKS 159.8.114.37:8123",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 18.141.177.23:80",
        "SOCKS 146.235.19.84:10880",
        "SOCKS 85.208.108.43:2094",
        "SOCKS 213.35.110.67:10898",
        "SOCKS 45.140.147.82:1082",
        "SOCKS 14.56.118.244:3128",
        "SOCKS 156.244.39.83:20002",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 211.171.114.154:3128",
        "SOCKS 213.35.110.67:10910",
        "SOCKS 61.72.221.124:3128",
        "SOCKS 193.239.86.249:3128",
        "SOCKS 177.11.49.41:1088",
        "SOCKS 51.15.210.79:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}