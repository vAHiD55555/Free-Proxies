function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 41.65.103.190:8080",
        "SOCKS 5.75.133.113:10801",
        "SOCKS 103.191.218.119:69",
        "SOCKS 174.138.162.36:8894",
        "SOCKS 43.242.227.10:9051",
        "SOCKS 159.223.86.111:1080",
        "SOCKS 193.233.218.121:1080",
        "SOCKS 80.78.25.87:9050",
        "SOCKS 89.31.189.39:1080",
        "SOCKS 174.138.165.211:38422",
        "SOCKS 161.35.90.93:1081",
        "SOCKS 51.159.162.71:9050",
        "SOCKS 47.245.165.201:1080",
        "SOCKS 174.138.165.211:9231",
        "SOCKS 43.133.54.152:7890",
        "SOCKS 193.221.203.14:1080",
        "SOCKS 194.190.80.36:1080",
        "SOCKS 79.111.118.99:1080",
        "SOCKS 84.54.217.219:1080",
        "SOCKS 185.93.104.246:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}