function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 217.76.39.4:1080",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 64.227.131.240:1080",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 8.210.89.96:1080",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 128.140.76.145:10773",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 139.177.229.243:8080",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 103.174.178.145:2005",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}