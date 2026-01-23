function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 37.120.162.180:10436",
        "SOCKS 37.120.133.137:3128",
        "SOCKS 119.81.189.194:80",
        "SOCKS 62.60.131.186:8082",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 119.81.71.27:8123",
        "SOCKS 37.120.162.180:39319",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 89.208.85.169:443",
        "SOCKS 148.251.194.247:1080",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 67.205.190.164:8080",
        "SOCKS 89.249.65.191:3128",
        "SOCKS 64.188.124.97:1080",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 181.214.39.51:5719",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}